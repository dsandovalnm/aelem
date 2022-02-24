
export interface CursoSeminario {
	id: number;
	codigo: number;
	nombre: string;
	tipo: number;
	descripcion: string;
	modalidad: string;
	premium: number;
	imagen: string;
	clases: number;
	profesional: number;
	visible: number;
}

export interface FullCursoSeminario {
	id_curso_seminario: number;
	codigo: number;
	nombre_curso_seminario: string;
	tipo: number;
	descripcion_curso_seminario: string;
	modalidad: string;
	premium: number;
	imagen_curso_seminario: string;
	clases: number;
	profesional: number;
	visible_curso_seminario: number;
	id_profesional: number;
	nombre_profesional: string;
	apellido_profesional: string;
	profesion: string;
	titulo_profesional: string;
	imagen_profesional: string;
}