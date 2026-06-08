const mongoose = require('mongoose');


const CertificateSchema = new mongoose.Schema({
  uuid: { type: String, required: true, unique: true },
  name: String,
  amana: String,
  baladiya: String,
  nationalId: String,
  healthCertificateNumber: String,
  job: String,
  nationality: String,
  gender: String,
  healthCertIssueDate: Date,
  healthCertExpiryDate: Date,
  healthCertIssueDateHijri: String,
  healthCertExpiryDateHijri: String,
  educationalProgram: String,
  educationalProgramEndDate: Date,
  licenseNumber: String,
  establishmentName: String,
  establishmentNumber: String,
  photoBuffer: Buffer,
  photoUrl: String,
  photoPublicId: String,
  isLocked: { type: Boolean, default: false },
  selectedLogo: {
    type: String,
    default: 'logos/الرياض.png'
  },
  createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Certificate', CertificateSchema);