

export const variables = {
    white: '#fff',
    black: '#000',
    blue: '#0b3860',
    orange: '#ff944d',
    yellow: '#ffb200',
    purple: '#3c0263',
    red: '#fa0000',
    lightGray: '#edf0f6;',
    gray: '#b3b3b3',
    darkGrey: '#3e4c5c',
    lightBlue: '#e6f2ff',
    green: '#005f00',


    
}

export const boxShadow = (boxShadowType ) => {
    let boxShadow;
if(boxShadowType === 'hover'){
boxShadow = 'box-shadow: 0px 1px 7px -6px rgba(0,0,0,0.41)'

}
if(boxShadowType === 'inset'){
    boxShadow=  'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;'
}
else{
    boxShadow = '0px 2px 8px -5px rgba(0,0,0,0.41)'
}

return boxShadow
}


