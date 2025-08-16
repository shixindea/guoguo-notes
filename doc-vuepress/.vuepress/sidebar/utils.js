import * as fs from 'fs/promises'; // 注意使用 fs.promises 而不是 fs
import * as path from 'path';
export async function listFiles(directoryPath) {
    // 读取指定目录下的所有文件和文件夹
    try {
        const files = await fs.readdir(directoryPath);
        const markdownFiles = files.filter(file => path.extname(file) === '.md');


        // 输出所有文件名
        return markdownFiles.map((file,index) => ({
            text: `${index+1}. ${file}`,
            link: file
        }));
    } catch (error) {
        console.error('Error reading directory:', error); // 错误变量名修正为 error
        throw error; // 抛出错误，让调用者处理
    }
}
