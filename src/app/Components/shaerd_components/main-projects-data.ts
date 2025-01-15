export interface MainProjectsData {
    
    project_id:string,
    project_img_src:string, 
    project_title:string, 
    project_desc:[
    {
        text:string,
        class?:string
        },
    {
        text:string,
        class?:string
        },
    {
        text:string,
        class?:string
        },
    ],
    project_client_info:{
        Client:string,
        Location:string,
        Completed:string,
        Website:string,
        class:string,
    },
      
}
