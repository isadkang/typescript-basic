type CoreCount = 2 | 4 | 8 | 12 
type CoreName = "Quad Core" | "Dual Core" | "Octa Core"

type Core = CoreName | CoreCount

interface IProsessor {
    brand: string
    baseModel: string
    modelName: string
    clockSpeed: number
    coreTotal: 2 | 4 | 8 | 12 | "Dual Core" | "Quad Core"
}

interface Intel extends IProsessor {
    turboBoost: boolean
}

interface AMD extends IProsessor {
    precisionBoost?: boolean
}

function createIntel(prosessor: Intel): void {
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
function createAMD(prosessor: AMD): void {
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

const intelCoreI5: Intel = {
    brand: 'Intel',
    baseModel: 'Core i5',
    modelName: 'i5-11350U',
    clockSpeed: 4,
    turboBoost: true,
    coreTotal: 4
}

const amdRyzen3: AMD = {
    brand: 'AMD',
    baseModel: 'Ryzen 3',
    modelName: 'R-5570x',
    clockSpeed: 6,
    // precisionBoost: true,
    coreTotal: "Dual Core"
}

createIntel(intelCoreI5)
createAMD(amdRyzen3)
