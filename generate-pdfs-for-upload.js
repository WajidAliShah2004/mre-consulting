/**
 * Generate PDFs for Supabase Upload
 * 
 * This script generates the 3 white paper PDFs that can be uploaded to Supabase Storage.
 * 
 * Usage:
 * 1. npm install jspdf (if not already installed)
 * 2. node generate-pdfs-for-upload.js
 * 3. PDFs will be created in ./generated-pdfs/ folder
 * 4. Upload them to Supabase Storage
 */

const fs = require('fs');
const path = require('path');

// Check if jsPDF is available
try {
  require.resolve('jspdf');
} catch (e) {
  console.error('❌ jsPDF not found. Please install it first:');
  console.error('   cd client && npm install jspdf');
  process.exit(1);
}

const { jsPDF } = require('jspdf');

// Create output directory
const outputDir = path.join(__dirname, 'generated-pdfs');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// PDF Configuration
const PDF_CONFIG = {
  pageWidth: 210,
  pageHeight: 297,
  margin: { top: 25, bottom: 25, left: 20, right: 20 },
  colors: {
    navy: [15, 23, 42],
    white: [255, 255, 255],
    lightGray: [243, 244, 246],
    darkGray: [75, 85, 99],
    textGray: [55, 65, 81]
  }
};

// White Paper Contents
const whitePapers = [
  {
    id: 'ai-automation-frontier',
    title: 'The New Frontier of Efficiency',
    subtitle: 'How AI & Automation Are Transforming Every Industry',
    filename: 'AI-Automation-Frontier-MRECAI.pdf',
    color: { primary: [0, 168, 232], secondary: [14, 165, 233] }
  },
  {
    id: 'digital-marketing-reputation',
    title: 'Digital Marketing, Reviews & Social Presence',
    subtitle: 'Building the Modern Reputation Engine',
    filename: 'Digital-Marketing-Reputation-MRECAI.pdf',
    color: { primary: [34, 197, 94], secondary: [16, 185, 129] }
  },
  {
    id: 'future-of-business',
    title: 'The Future of Business',
    subtitle: 'How AI and Automation Are Transforming Operations',
    filename: 'Future-of-Business-MRECAI.pdf',
    color: { primary: [168, 85, 247], secondary: [147, 51, 234] }
  }
];

function addCoverPage(doc, paper) {
  const { pageWidth, pageHeight } = PDF_CONFIG;
  const centerX = pageWidth / 2;

  // Gradient background
  doc.setFillColor(...paper.color.primary);
  doc.rect(0, 0, pageWidth, pageHeight / 3, 'F');
  
  doc.setFillColor(...paper.color.secondary);
  doc.rect(0, pageHeight / 3, pageWidth, pageHeight / 3, 'F');
  
  doc.setFillColor(...PDF_CONFIG.colors.navy);
  doc.rect(0, (pageHeight / 3) * 2, pageWidth, pageHeight / 3, 'F');

  // White content box
  const boxMargin = 30;
  const boxY = 60;
  const boxHeight = 140;
  doc.setFillColor(...PDF_CONFIG.colors.white);
  doc.roundedRect(boxMargin, boxY, pageWidth - (boxMargin * 2), boxHeight, 3, 3, 'F');

  // Title
  doc.setTextColor(...PDF_CONFIG.colors.navy);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  
  const titleLines = doc.splitTextToSize(paper.title, pageWidth - (boxMargin * 2) - 20);
  let yPos = boxY + 30;
  titleLines.forEach(line => {
    doc.text(line, centerX, yPos, { align: 'center' });
    yPos += 12;
  });

  // Subtitle
  yPos += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(14);
  doc.setTextColor(...PDF_CONFIG.colors.darkGray);
  
  const subtitleLines = doc.splitTextToSize(paper.subtitle, pageWidth - (boxMargin * 2) - 20);
  subtitleLines.forEach(line => {
    doc.text(line, centerX, yPos, { align: 'center' });
    yPos += 8;
  });

  // Decorative line
  yPos += 10;
  doc.setDrawColor(...paper.color.primary);
  doc.setLineWidth(1);
  doc.line(centerX - 30, yPos, centerX + 30, yPos);

  // Company branding
  yPos = boxY + boxHeight - 35;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...paper.color.primary);
  doc.text('MRE Consulting & Insurance', centerX, yPos, { align: 'center' });

  yPos += 8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...PDF_CONFIG.colors.textGray);
  doc.text('www.MRECAI.com', centerX, yPos, { align: 'center' });

  yPos += 6;
  doc.text('929-919-3574 | Matthew@MRECAI.com', centerX, yPos, { align: 'center' });

  // Footer badge
  const badgeY = pageHeight - 40;
  doc.setFillColor(...paper.color.primary);
  doc.roundedRect(centerX - 40, badgeY, 80, 15, 2, 2, 'F');
  doc.setTextColor(...PDF_CONFIG.colors.white);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('EXECUTIVE WHITE PAPER', centerX, badgeY + 10, { align: 'center' });

  // Year
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...PDF_CONFIG.colors.lightGray);
  doc.text('© 2025', centerX, pageHeight - 15, { align: 'center' });
}

function addContentPage(doc, paper) {
  const { pageWidth, margin } = PDF_CONFIG;
  const maxWidth = pageWidth - margin.left - margin.right;
  let yPos = margin.top + 20;

  // Section header
  doc.setFillColor(...paper.color.primary);
  doc.roundedRect(margin.left - 2, yPos - 8, maxWidth + 4, 12, 1, 1, 'F');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(...PDF_CONFIG.colors.white);
  doc.text('Executive Summary', margin.left + 3, yPos);
  
  yPos += 20;

  // Content
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...PDF_CONFIG.colors.textGray);

  const content = [
    'This comprehensive white paper provides strategic insights and actionable frameworks for implementing modern business solutions.',
    '',
    'Key topics covered include:',
    '• Strategic implementation frameworks',
    '• ROI analysis and benchmarking',
    '• Industry-specific best practices',
    '• Compliance and security considerations',
    '• Case studies and success metrics',
    '',
    'For the complete white paper with detailed analysis, frameworks, and implementation guides, please contact MRE Consulting & Insurance.',
    '',
    'Contact Information:',
    'Phone: 929-919-3574',
    'Email: Matthew@MRECAI.com',
    'Website: www.MRECAI.com'
  ];

  content.forEach(line => {
    if (line.startsWith('•')) {
      doc.setFillColor(...paper.color.primary);
      doc.circle(margin.left + 2, yPos - 1.5, 1, 'F');
      doc.text(line.replace('• ', ''), margin.left + 8, yPos);
    } else {
      doc.text(line, margin.left, yPos, { maxWidth });
    }
    yPos += line === '' ? 3 : 6;
  });
}

function generatePDF(paper) {
  console.log(`📄 Generating ${paper.filename}...`);
  
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true
  });

  // Add cover page
  addCoverPage(doc, paper);

  // Add content page
  doc.addPage();
  addContentPage(doc, paper);

  // Save
  const outputPath = path.join(outputDir, paper.filename);
  const pdfData = doc.output('arraybuffer');
  fs.writeFileSync(outputPath, Buffer.from(pdfData));
  
  console.log(`✅ Created: ${outputPath}`);
}

// Generate all PDFs
console.log('🚀 Starting PDF generation...\n');

whitePapers.forEach(paper => {
  generatePDF(paper);
});

console.log('\n✨ All PDFs generated successfully!');
console.log(`📁 Location: ${outputDir}`);
console.log('\n📤 Next steps:');
console.log('1. Go to Supabase Dashboard → Storage');
console.log('2. Create/open "white-papers" bucket');
console.log('3. Upload all 3 PDF files from the generated-pdfs folder');
console.log('4. Update the database URLs using the SQL in SETUP-SUPABASE-PDFS.md');
