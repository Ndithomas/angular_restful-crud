import { Routes } from '@angular/router';


export const routes: Routes = [
    
    {
        path:'listing',
        loadComponent:()=>import('../listing/listing.component').then(list=>list.ListingComponent)
    },
    {
        path:'create',
        loadComponent:()=>import('../creating-resource/creating-resource.component').then(create=>create.CreatingResourceComponent)
    },
    {
        path:'update',
        loadComponent:()=>import('../update/update.component').then(update=>update.UpdateComponent)
    },
    {
        path:'delete',
        loadComponent:()=>import('../delete/delete.component').then(del=>del.DeleteComponent)
    },
  
   
];
