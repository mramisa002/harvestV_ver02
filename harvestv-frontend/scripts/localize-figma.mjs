import ts from 'typescript';
import fs from 'node:fs';
export function localizeFigma(code,file){
 const source=ts.createSourceFile(file,code,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
 const textNode=text=>ts.factory.createJsxSelfClosingElement(ts.factory.createIdentifier('T'),undefined,ts.factory.createJsxAttributes([ts.factory.createJsxAttribute(ts.factory.createIdentifier('text'),ts.factory.createStringLiteral(text))]));
 const result=ts.transform(source,[context=>root=>{
  function visit(node){
   if(ts.isJsxText(node)&&node.text.trim())return textNode(node.text);
   if(ts.isJsxExpression(node)&&node.expression&&(ts.isStringLiteral(node.expression)||ts.isNoSubstitutionTemplateLiteral(node.expression)))return textNode(node.expression.text);
   if(ts.isJsxAttribute(node)){
    if(['aria-label','placeholder'].includes(node.name.getText(source))&&node.initializer&&ts.isStringLiteral(node.initializer))return ts.factory.updateJsxAttribute(node,node.name,ts.factory.createJsxExpression(undefined,ts.factory.createCallExpression(ts.factory.createIdentifier('t'),undefined,[ts.factory.createStringLiteral(node.initializer.text)])));
    return node;
   }
   return ts.visitEachChild(node,visit,context);
  }return ts.visitNode(root,visit);
 }]);
 let output=ts.createPrinter().printFile(result.transformed[0]);result.dispose();
 output=output.replace(/export default function (\w+)\(\) \{/, '$&\n    const {t,language}=useLanguage();');
 return '"use client";\nimport {T,useLanguage} from "@/lib/language";\n'+output;
}
if(process.argv.includes('--apply'))for(const file of fs.readdirSync('src/components/figma')){const path='src/components/figma/'+file;const code=fs.readFileSync(path,'utf8');if(!code.includes('@/lib/language'))fs.writeFileSync(path,localizeFigma(code,file));}
