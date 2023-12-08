"use strict";
function createIntel(prosessor) {
    console.log(`
        terimakasih ${prosessor.brand} anda berhasil membuat prosessor dengan detail berikut:
        ----
        nama base model: ${prosessor.baseModel}
        nama model: ${prosessor.modelName}
        kecepatan clock: ${prosessor.clockSpeed} 
        turbo boost: ${prosessor.turboBoost}
        core total: ${prosessor.coreTotal}
        `);
}
function createAMD(prosessor) {
    console.log(`
        terimakasih ${prosessor.brand} anda berhasil membuat prosessor dengan detail berikut:
        ----
        nama base model: ${prosessor.baseModel}
        nama model: ${prosessor.modelName}
        kecepatan clock: ${prosessor.clockSpeed} 
        turbo boost: ${prosessor.precisionBoost}
        core total: ${prosessor.coreTotal}
    `);
}
const intelCoreI5 = {
    brand: 'Intel',
    baseModel: 'Core i5',
    modelName: 'i5-11350U',
    clockSpeed: 4,
    turboBoost: true,
    coreTotal: 4
};
const amdRyzen3 = {
    brand: 'AMD',
    baseModel: 'Ryzen 3',
    modelName: 'R-5570x',
    clockSpeed: 6,
    precisionBoost: true,
    coreTotal: "Dual Core"
};
createIntel(intelCoreI5);
createAMD(amdRyzen3);
