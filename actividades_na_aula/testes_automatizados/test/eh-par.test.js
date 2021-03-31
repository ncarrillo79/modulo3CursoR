const ehPar=require('../src/ehPar')

test('Teste se eh par ou não' , () => {
    expect(ehPar(10)).toBe('Sim')
})