# MedConnect - Digital Prescription & Patient Records System

> A secure, modern healthcare platform that digitizes prescriptions and patient records, enabling seamless communication between doctors, patients, and pharmacists through QR code technology.

## 🎯 Problem Statement

Traditional healthcare systems rely heavily on handwritten prescriptions, which are:

- Prone to misinterpretation and errors
- Easily lost or damaged
- Vulnerable to fraud and forgery
- Inefficient for tracking patient medical history
- Time-consuming for pharmacy verification

**MedConnect** solves these challenges by providing a comprehensive digital platform that connects all stakeholders in the healthcare prescription ecosystem.

## ✨ Key Features

### For Doctors

- **Digital Prescription Creation**: Issue prescriptions with detailed medication information
- **Patient Medical History**: Access complete patient records and visit history
- **QR Code Generation**: Automatic generation of secure QR codes for each prescription
- **Visit Documentation**: Record consultations, diagnoses, and treatment notes

### For Patients

- **Digital Medical Records**: Maintain comprehensive health history
- **Prescription Tracking**: Monitor prescription status and fulfillment
- **Secure Access**: Role-based authentication and data protection
- **Emergency Information**: Store critical health information and emergency contacts

### For Pharmacists

- **QR Code Verification**: Instantly verify prescription authenticity by scanning QR codes
- **Prescription Fulfillment**: Process and mark prescriptions as completed
- **Audit Trail**: Complete logging of all pharmacy interactions
- **Anti-Fraud Protection**: Secure validation prevents prescription tampering

### Security & Compliance

- **End-to-End Encryption**: All sensitive data is encrypted
- **Role-Based Access Control**: Users only access data relevant to their role
- **Audit Logging**: Complete tracking of all system interactions
- **Data Privacy**: Compliance with healthcare data protection standards

## 🛠️ Technology Stack

### Backend

- **Node.js** with **Express.js** - RESTful API server
- **TypeScript** - Type-safe development
- **PostgreSQL** - Primary database
- **Sequelize ORM** - Database modeling and migrations
- **JWT** - Authentication and authorization
- **bcryptjs** - Password hashing
- **QRCode** - QR code generation
- **Nodemailer** - Email delivery

### Development Tools

- **ESLint** - Code linting and formatting
- **Nodemon** - Development server auto-reload
- **Sequelize CLI** - Database migrations and seeding
- **ts-node** - TypeScript execution

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL 12+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd mediConnect-API
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**

   ```bash
   cp .env.example .env
   # Edit .env with your database credentials and other settings
   ```

4. **Database Setup**

   ```bash
   # Create database
   npm run db:reset

   # Run migrations
   npm run db:migrate

   # Seed with sample data
   npm run db:seed
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

The server will be available at `http://localhost:3000`

### Available Scripts

| Command              | Description                              |
| -------------------- | ---------------------------------------- |
| `npm run dev`        | Start development server with hot reload |
| `npm run build`      | Build TypeScript to JavaScript           |
| `npm start`          | Start production server                  |
| `npm run lint`       | Run ESLint code analysis                 |
| `npm run lint:fix`   | Auto-fix ESLint issues                   |
| `npm run db:migrate` | Run database migrations                  |
| `npm run db:seed`    | Seed database with sample data           |
| `npm run db:reset`   | Reset database (drop, create, migrate)   |
| `npm run db:fresh`   | Fresh database with seeds                |

## 📊 Database Schema

The system uses a relational database with the following core entities:

- **Users** - Base user accounts (doctors, patients, pharmacists, admins)
- **Patients** - Patient-specific information and medical history
- **Doctors** - Doctor credentials and hospital affiliations
- **Medical Visits** - Individual consultation records
- **Prescriptions** - Digital prescriptions linked to visits
- **Prescription Items** - Individual medications within prescriptions
- **QR Codes** - Secure QR codes for prescription verification
- **Pharmacy Logs** - Audit trail of pharmacy interactions

## 🔐 Authentication & Authorization

The system implements role-based access control with four user types:

- **Admin**: Full system access and user management
- **Doctor**: Create prescriptions, view patient records, manage visits
- **Pharmacist**: Scan and fulfill prescriptions, view pharmacy logs
- **Patient**: View own medical history and prescriptions

## 📱 API Endpoints

### Health Check

```
GET /health - System health status
GET /api/v1 - API information and status
```

### Authentication (Planned)

```
POST /api/v1/auth/login - User authentication
POST /api/v1/auth/register - User registration
POST /api/v1/auth/refresh - Token refresh
```

### Prescriptions (Planned)

```
POST /api/v1/prescriptions - Create new prescription
GET /api/v1/prescriptions/:id - Get prescription details
PUT /api/v1/prescriptions/:id/status - Update prescription status
```

### QR Code Verification (Planned)

```
POST /api/v1/qr/scan - Scan and verify QR code
GET /api/v1/qr/:hash/details - Get prescription from QR hash
```

## 🎯 Project Goals & Success Criteria

### Primary Objectives

- ✅ Secure web platform for digital prescription management
- ✅ QR code generation and email delivery system
- ✅ Role-based access for all healthcare stakeholders
- ✅ Complete patient medical history management
- ⏳ Sub-10 second pharmacy verification process
- ⏳ Healthcare data compliance and privacy protection

### Success Metrics

- Prescription verification time < 10 seconds
- Zero prescription fraud incidents
- 99%+ system uptime
- Full audit trail for all transactions
- Seamless user experience across all roles

## 🔄 Development Status

**Current Phase**: Backend Development & Database Architecture ✅

**Completed**:

- Database schema design and migrations
- Core model definitions and relationships
- Development environment setup
- Basic server configuration
- Authentication framework preparation

**In Progress**:

- REST API endpoint implementation
- Authentication and authorization system
- QR code generation and verification
- Email notification system

**Upcoming**:

- Frontend React application
- API integration and testing
- Security auditing and compliance
- Production deployment

## 🤝 Contributing

This is currently a team development project. For team members:

1. Create feature branches from `main`
2. Follow the established ESLint configuration
3. Run tests before submitting pull requests
4. Update documentation for new features

## 📄 License

MIT License - This project is open source and available for educational and non-commercial use.

## 🏥 About MedConnect

MedConnect is designed to modernize healthcare prescription management in Rwanda and beyond. By connecting doctors, patients, and pharmacists through secure digital technology, we aim to improve healthcare delivery, reduce errors, and enhance patient safety.
