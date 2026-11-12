import fs from 'node:fs';
import ts from 'typescript';
import vm from 'node:vm';
const sandbox={exports:{}};vm.runInNewContext(ts.transpileModule(fs.readFileSync('src/lib/bangla.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,sandbox);
const dictionary=sandbox.exports.bangla;const texts=new Set();
for(const file of fs.readdirSync('src/components/figma')){
 const source=ts.createSourceFile(file,fs.readFileSync('src/components/figma/'+file,'utf8'),ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
 function visit(node){if(ts.isJsxAttribute(node)&&node.name.getText(source)==='text'&&node.initializer&&ts.isStringLiteral(node.initializer))texts.add(node.initializer.text.trim());if(ts.isCallExpression(node)&&node.expression.getText(source)==='t'&&node.arguments[0]&&ts.isStringLiteral(node.arguments[0]))texts.add(node.arguments[0].text.trim());ts.forEachChild(node,visit);}visit(source);
}
for(const file of ['src/components/page-interactions.tsx','src/components/field-controls.tsx','src/components/farm-map.tsx','src/components/farm-address-field.tsx','src/components/farm-location.tsx','src/components/live-dashboard.tsx','src/lib/farm-context.tsx']){
 const source=ts.createSourceFile(file,fs.readFileSync(file,'utf8'),ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
 function collect(node){if(ts.isStringLiteral(node))texts.add(node.text.trim());else if(ts.isConditionalExpression(node)){collect(node.whenTrue);collect(node.whenFalse);}}
 function visit(node){if(ts.isCallExpression(node)&&['t','setMessage','setLocationError','setStorageError'].includes(node.expression.getText(source))&&node.arguments[0])collect(node.arguments[0]);ts.forEachChild(node,visit);}visit(source);
}
const preserved=/^(HarvestV|EN|বাংলা|Capnodium sp\.|#HV-\d+|[+\d\s.,%°–−→~:()/-]+|[^a-zA-Z]+)$/;
const missing=[...texts].filter(text=>text&&!dictionary[text]&&!preserved.test(text));
if(missing.length){console.error('Missing translations:',JSON.stringify(missing,null,2));process.exitCode=1;}else console.log(`Bangla coverage passed: ${texts.size} labels, descriptions, placeholders, and messages checked.`);
