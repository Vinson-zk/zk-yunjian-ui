!function(a){a.zkJsValidates=a=>({required:{required:!0,message:a.formatMessage({id:"global.validate.notNull"})},username:{type:"string",message:a.formatMessage({id:"global.validate.username"})},loginname:{pattern:/^[a-zA-Z_][a-z0-9A-Z_]*$/,message:a.formatMessage({id:"global.validate.input.login"})},mail:{pattern:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,message:a.formatMessage({id:"global.validate.input.mail"})},phone:{pattern:/^([\+]\d{2,3}-)(\d{11})$/,message:a.formatMessage({id:"global.validate.input.phoneNum"})},mobile:{pattern:/^([\+]\d{2,3}-)(\d{3,4}-)(\d{7,8})$/,message:a.formatMessage({id:"global.validate.input.mobileNum"})},url:{type:"url",message:a.formatMessage({id:"global.validate.url"})},string:{type:"string",message:a.formatMessage({id:"global.validate.string"})},number:{type:"number",message:a.formatMessage({id:"global.validate.number"})},integer:{type:"integer",message:a.formatMessage({id:"global.validate.integer"})},float:{type:"float",message:a.formatMessage({id:"global.validate.float"})},boolean:{type:"float",message:a.formatMessage({id:"global.validate.boolean"})},object:{type:"object",message:a.formatMessage({id:"global.validate.object"})},array:{type:"array",message:a.formatMessage({id:"global.validate.array"})},date:{type:"date",message:a.formatMessage({id:"global.validate.date"})},enum:(e=[])=>({type:"enum",enum:e,message:a.formatMessage({id:"global.validate.enum"},{value:JSON.stringify(e)})}),len:e=>({len:e,message:a.formatMessage({id:"global.validate.len",value:e},{value:e})}),max:e=>({max:e,message:a.formatMessage({id:"global.validate.max",value:e},{value:e})}),min:e=>({min:e,message:a.formatMessage({id:"global.validate.min",value:e},{value:e})}),confirm:(a,e)=>({validator:(a,e,l)=>{}}),validator:a=>({validator:a})})}("undefined"!=typeof window?window:this);