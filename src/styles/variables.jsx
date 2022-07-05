

export const variables = {
    white: '#fff',
    black: '#000',
    blue: '#0099cc',
    orange: '#ff944d',
    purple: '#3c0263',
    red: '#fa0000',
    lightGray: '#edf0f6;',
    gray: '#b5b5b5',
    darkGrey: '#3e4c5c',
    lightBlue: '#00a3cc',
    green: '#005f00'

    
}

export const boxShadow = (boxShadowType ) => {
    let boxShadow;
if(boxShadowType === 'hover'){
boxShadow = 'box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'

}
if(boxShadowType === 'inset'){
    boxShadow=  'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;'
}
else{
    boxShadow = '0px 2px 8px -5px rgba(0,0,0,0.41)'
}

return boxShadow
}


