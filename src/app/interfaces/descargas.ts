export interface Descarga {
	id: number;
	codigo: number;
	nombre: string;
	descripcion: string;
	pago: number;
	visible: number;
	categoria: number;
	imagen: string;
	ruta: string;
	precio_arg: string;
	precio_ext: string;
}

export interface Categoria {
	id: number;
	codigo: number;
	visible: number;
	nombre: string;
	texto: string;
	icono: string;
}

export interface DescargaCategoria {
	id_descarga: number;
	codigo_descarga: number;
	nombre_descarga: string;
	descripcion: string;
	pago: number;
	visible: number;
	categoria: number;
	imagen: string;
	ruta: string;
	precio_arg: number;
	precio_ext: number;
	id_categoria: number;
	codigo_categoria: number;
	nombre_categoria: string;
	texto_categoria: string;
	icono_categoria: string;
}