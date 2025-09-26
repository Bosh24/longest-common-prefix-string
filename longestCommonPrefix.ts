function longestCommonPrefix(listStr: string[]):string{
    // ถ้า listStr เป็น string ว่าง reuturn ""
    if (!listStr || listStr.length === 0) {
        return "";
    }
    // ใช้วิธ๊ตรวจทีละตำแหน่งของทุกstring
    for (let i = 0; i < listStr[0].length; i++) {
        const char = listStr[0][i];
        console.log(char,"i")
        // ใช้ตรวจว่าอีก string ตำแหน่งเดียวกัน ตรงกับตัว char มั้ย 
        for (let j = 1; j < listStr.length; j++) {
            // ถ้า i ยาวกว่า j หรือ ตัวอักษรไม่ตรงกัน ให้คืน prefix ที่เจอ
            console.log(listStr[j][i],j)
            if (i >= listStr[j].length || listStr[j][i] !== char) {
                return listStr[0].slice(0, i);
            }
        }
    }

    return listStr[0];
}
const testCases: { input: string[]; expected: string }[] = [
    { input: ["flower","flow","flight"], expected: "fl" },
    { input: ["dog","racecar","car"], expected: "" },
];

testCases.forEach(({ input, expected }, index) => {
    const result = longestCommonPrefix(input);
    console.log(`Test ${index + 1}:`, result === expected ? "Pass" : `Fail (Got: "${result}", Expected: "${expected}")`);
});  
