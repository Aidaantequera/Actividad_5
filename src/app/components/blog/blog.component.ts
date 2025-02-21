import { Component } from '@angular/core';
import { INoticia } from '../../interface/inoticia';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-blog',
  imports: [FormsModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  noticias: INoticia [] = [];

  nuevaNoticia: INoticia = {titulo: "", imagen: "", texto: "", fecha: ""};

  ngOnInit(): void {
  this.noticias = [
    {titulo: 'Perro héroe salva a su dueño de un incendio',
    imagen: 'https://media.os.fressnapf.com/cms/2024/02/labrador-retriever-liegt-gras.jpg?t=seoimg_937',
    texto: "Un valiente labrador llamado Max se convirtió en un héroe al salvar a su dueño de un incendio en su hogar. El perro ladró sin cesar hasta que su dueño despertó y pudo escapar de las llamas. Gracias a su rápida acción, ambos salieron ilesos.",
    fecha: "20 de febrero de 2025"
  },

    {titulo: 'Gato viajero recorre 500 km para volver a casa',
      imagen: 'https://blog-static.petlove.com.br/wp-content/uploads/2021/01/gato-domestico-pelo-curto-petlove1.jpg',
      texto: "Un gato llamado Oliver sorprendió a todos al recorrer 500 kilómetros para regresar con su familia después de haberse perdido en unas vacaciones. La increíble historia de su regreso demuestra el fuerte vínculo entre las mascotas y sus dueños.",
      fecha: "18 de febrero de 2025"
    }

  ];

  }
   
  getNoticia(){
    if (this.nuevaNoticia.titulo && this.nuevaNoticia.imagen && this.nuevaNoticia.texto && this.nuevaNoticia.fecha) {
      this.noticias.push({ ...this.nuevaNoticia });
      this.nuevaNoticia = { titulo: "", imagen: "", texto: "", fecha: "" }; 
    } else {
      alert("Por favor, completa todos los campos antes de publicar.");
    }

  }


 

}
