import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require("fs");

fs.readdir('../../', (err, files)=>{
    if(err){
        return console.log(err)
    }
    let con = ''
    let cates = []
    let tags = []
    for(let name of files){
        if(/.md$/.test(name)){
            con = fs.readFileSync("../../"+name, "utf-8")
            con = con.split("javascript")[1]
            con = con.split("```")[0]
            con = JSON.parse(con)
            // console.log(con)

            if(!cates.includes(con.category)){
                cates.push(con.category)
            }

            for(let i of con.tags){
                if(!tags.includes(i)){
                    tags.push(i)
                }
            }
        }
    }
    let title = "title"
    let date = ['2022', '3', '24']
    cates = cates.join(" / ")
    tags = JSON.stringify(tags)
    date = JSON.stringify(date)
    let str = "```javascript\n{\n"
    str += `"title":"${title}",\n`
    str += `"category":"${cates}",\n`
    str += `"tags":${tags},\n`
    str += `"date":${date}\n}\n`
    str += "```\n\n"

    // let y = JSON.stringify(all)
    // let z = "const info = " + y + "\nexport default info"
    let theName = process.argv[2]
    theName = "../../" + theName + ".md"
    fs.exists(theName, (exists) => {
        if (exists) {
            console.log("Error : 文件已存在")
       } else {
            fs.writeFileSync(theName, str, "utf-8")
            console.log("文件创建成功")
       }
  });
    
    // console.log(theName)
    // console.log(str)
})