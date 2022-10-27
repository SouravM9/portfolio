export default{
    name:'brands',
    title:'Brands/Platforms',
    type: 'document',
    fields:[
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name: 'link',
            title: 'Link',
            type: 'string',
          }
    ]
}