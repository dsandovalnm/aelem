export interface Precio {
	id: number;
	codigo_seminario: number;
	tipo: string;
	valor: number;
	descripcion: string;
}

export interface FullPrecio {
	id_precio: number;
	codigo_seminario: number;
	tipo: string;
	valor: number;
	descripcion_precio: string;
	nombre_seminario: string;
	imagen: string;
}