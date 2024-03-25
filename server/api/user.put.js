export default defineEventHandler((event) => {
  if (event.req.method === "PUT") {
    //update a blog by id
    // return the blog;
    const data = {
      nip: body.nip,
      pwd: body.pwd,
      ses_reg: body.ses_reg,
      kdperawat: body.kdperawat,
      kddokter: body.kddokter,
      nama_pegawai: body.nama_pegawai,
      roles: body.roles,
      kdunit: body.kdunit,
      departemen: body.departemen,
      st_dokter_rajal_eksekutif: body.st_dokter_rajal_eksekutif,
      st_dokter_rajal_reguler: body.st_dokter_rajal_reguler,
      st_dokter_rajal_emergency: body.st_dokter_rajal_emergency,
      nipb: body.nipb,
      aktif: body.aktif,
    };
  }
});
