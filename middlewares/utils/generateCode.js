const Code = require('../../model/CodeModel');

exports.generateAdminCode = async () => {
  try {
    console.log('Generating admin code...');
    let code = await Code.findOne();
    if (!code) {
      code = new Code();
    }
    code.admin = (code.admin || 0) + 1;
    await code.save();
    const adminCode = `A${String(code.admin).padStart(3, '0')}`;
    console.log('Generated admin code:', adminCode);
    return adminCode;
  } catch (error) {
    console.error('Failed to generate admin code:', error);
    throw new Error('Failed to generate admin code');
  }
  };
exports.generatePatientStaffCode = async () => {
    try {
      console.log('Generating patientStaff code...');
      let code = await Code.findOne();
      if (!code) {
        code = new Code();
      }
      code.patientStaff = (code.patientStaff || 0) + 1;
      await code.save();
      const patientStaffCode = `PS${String(code.patientStaff).padStart(3, '0')}`;
      console.log('Generated patientStaff code:', patientStaffCode);
      return patientStaffCode;
    } catch (error) {
      console.error('Failed to generate patientStaff code:', error);
      throw new Error('Failed to generate patientStaff code');
    }
  };
  exports.generateClientStaffCode = async () => {
    try {
      console.log('Generating clientStaff code...');
      let code = await Code.findOne();
      if (!code) {
        code = new Code();
      }
      code.clientStaff = (code.clientStaff || 0) + 1;
      await code.save();
      const clientStaffCode = `CS${String(code.clientStaff).padStart(3, '0')}`;
      console.log('Generated clientStaff code:', clientStaffCode);
      return clientStaffCode;
    } catch (error) {
      console.error('Failed to generate clientStaff code:', error);
      throw new Error('Failed to generate clientStaff code');
    }
  };
  exports.generateInsuranceStaffCode = async () => {
    try {
      console.log('Generating insuranceStaff code...');
      let code = await Code.findOne();
      if (!code) {
        code = new Code();
      }
      code.insuranceStaff = (code.insuranceStaff || 0) + 1;
      await code.save();
      const insuranceStaffCode = `IS${String(code.insuranceStaff).padStart(3, '0')}`;
      console.log('Generated insuranceStaff code:', insuranceStaffCode);
      return insuranceStaffCode;
    } catch (error) {
      console.error('Failed to generate insuranceStaff code:', error);
      throw new Error('Failed to generate insuranceStaff code');
    }
  };

  exports.generatePatientCode = async () => {
    try {
      console.log('Generating patient code...');
      let code = await Code.findOne();
      if (!code) {
        code = new Code();
      }
      code.patient = (code.patient || 0) + 1;
      await code.save();
      const patientCode = `P${String(code.patient).padStart(3, '0')}`;
      console.log('Generated patient code:', patientCode);
      return patientCode;
    } catch (error) {
      console.error('Failed to generate patient code:', error);
      throw new Error('Failed to generate patient code');
    }
  };

  exports.generateClinicCode = async () => {
    try {
      console.log('Generating clinic code...');
      let code = await Code.findOne();
      if (!code) {
        code = new Code();
      }
      code.clinic = (code.clinic || 0) + 1;
      await code.save();
      const clinicCode = `P${String(code.clinic).padStart(3, '0')}`;
      console.log('Generated clinic code:', clinicCode);
      return clinicCode;
    } catch (error) {
      console.error('Failed to generate clinic code:', error);
      throw new Error('Failed to generate clinic code');
    }
  };

  exports.generateDoctorCode = async () => {
    try {
      console.log('Generating doctor code...');
      let code = await Code.findOne();
      if (!code) {
        code = new Code();
      }
      code.doctor = (code.doctor || 0) + 1;
      await code.save();
      const doctorCode = `P${String(code.doctor).padStart(3, '0')}`;
      console.log('Generated doctor code:', doctorCode);
      return doctorCode;
    } catch (error) {
      console.error('Failed to generate doctor code:', error);
      throw new Error('Failed to generate doctor code');
    }
  };