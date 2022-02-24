import { SafeHtml } from "@angular/platform-browser";

export interface ArticuloLeer {
	id: number;
	codigo: number;
	titulo: string;
	autor: string;
	anio: string;
	institucion: string;
	descripcion: string;
	contenido: string | SafeHtml;
	imagen: string;
	imagen_preview: string;
}