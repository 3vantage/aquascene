#!/usr/bin/env node

/**
 * Accessibility Audit Script
 * Checks color contrast ratios and basic accessibility compliance
 */

const fs = require('fs')
const path = require('path')

// Color contrast calculation
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

function getContrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)
  
  if (!rgb1 || !rgb2) return 0
  
  const l1 = getLuminance(rgb1.r, rgb1.g, rgb1.b)
  const l2 = getLuminance(rgb2.r, rgb2.g, rgb2.b)
  
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  
  return (lighter + 0.05) / (darker + 0.05)
}

// Load themes data
function loadThemes() {
  try {
    const themesPath = path.join(__dirname, '../src/data/themes.ts')
    const themesContent = fs.readFileSync(themesPath, 'utf8')
    
    // Extract color values using regex (simple approach)
    const themes = []
    const themeBlocks = themesContent.split('{').slice(1)
    
    themeBlocks.forEach(block => {
      const nameMatch = block.match(/name: '([^']+)'/)
      const primaryMatch = block.match(/primary: '([^']+)'/)
      const backgroundMatch = block.match(/background: '([^']+)'/)
      const textMatch = block.match(/text: '([^']+)'/)
      
      if (nameMatch && primaryMatch && backgroundMatch && textMatch) {
        themes.push({
          name: nameMatch[1],
          primary: primaryMatch[1],
          background: backgroundMatch[1],
          text: textMatch[1]
        })
      }
    })
    
    return themes
  } catch (error) {
    console.error('Error loading themes:', error.message)
    return []
  }
}

// Audit function
function auditAccessibility() {
  console.log('🔍 AquaScene Accessibility Audit\n')
  console.log('=' .repeat(50))
  
  const themes = loadThemes()
  let totalIssues = 0
  
  themes.forEach(theme => {
    console.log(`\n📋 Theme: ${theme.name}`)
    console.log('-'.repeat(30))
    
    const issues = []
    
    // Check text contrast
    const textContrast = getContrastRatio(theme.text, theme.background)
    console.log(`Text Contrast: ${textContrast.toFixed(2)}:1`)
    
    if (textContrast < 4.5) {
      issues.push('❌ Text contrast below WCAG AA (4.5:1)')
    } else if (textContrast >= 7) {
      console.log('✅ Text contrast meets WCAG AAA')
    } else {
      console.log('✅ Text contrast meets WCAG AA')
    }
    
    // Check button contrast (assuming white text on primary)
    const buttonContrast = getContrastRatio('#ffffff', theme.primary)
    console.log(`Button Contrast: ${buttonContrast.toFixed(2)}:1`)
    
    if (buttonContrast < 4.5) {
      issues.push('❌ Button contrast below WCAG AA (4.5:1)')
    } else {
      console.log('✅ Button contrast meets WCAG AA')
    }
    
    if (issues.length === 0) {
      console.log('🎉 No accessibility issues found!')
    } else {
      console.log('\n⚠️  Issues found:')
      issues.forEach(issue => console.log(`   ${issue}`))
      totalIssues += issues.length
    }
  })
  
  console.log('\n' + '='.repeat(50))
  console.log(`📊 Summary: ${totalIssues} total issues found across ${themes.length} themes`)
  
  if (totalIssues === 0) {
    console.log('🎉 All themes pass accessibility audit!')
    process.exit(0)
  } else {
    console.log('⚠️  Some themes need accessibility improvements.')
    process.exit(1)
  }
}

// Run audit
auditAccessibility()