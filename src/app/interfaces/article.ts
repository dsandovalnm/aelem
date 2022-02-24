
export interface Article {
	id: number;
	codigo: number;
	titulo: string;
	sub_titulo: string;
	descripcion: string;
	contenido: string;
	imagen: string;
	profesional: number;
}

export interface ArticleProfesional {
	id_articulo: number;
	codigo: number;
	titulo_articulo: string;
	sub_titulo: string;
	articulo_descripcion: string;
	contenido: string;
	imagen_articulo: string;
	profesional: number;
	id_profesional: number;
	nombre: string;
	apellido: string;
	profesion: string;
	titulo_profesional: string;
	descripcion_profesional: string;
	imagen_profesional: string;
}