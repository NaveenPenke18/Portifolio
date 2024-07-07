import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
   skills_list=["java_logo.png","spring_boot_logo.png","python_logo.png","microservices_logo.jfif","html_logo.png","css_logo.png","angular_logo.png","angular_material_logo.png","mysql_logo.png","postgresqul_logo.png","elastic_logo.png","druid_logo.png","kafka_logo.png","git_logo.png"]
   getLogoPaths(){
    let paths=[]
    for(let i=0;i<this.skills_list.length;i++){
      paths.push('assets/logo/'+this.skills_list[i])
    }
    return paths
  }
}






   

