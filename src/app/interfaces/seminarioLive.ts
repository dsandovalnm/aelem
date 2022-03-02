export interface SeminarioLive {
	id: number;
	codigo: number;
	codigo_externo: number;
	nombre: string;
	descripcion: string;
	cupos: number;
	grupo_actual: number;
	duracion: string;
	modalidad: string;
	material_adicional: number;
	texto_descriptivo_1: string;
	texto_descriptivo_2: string;
	imagen: string;
	video_intro: string;
	profesional: number;
	visible: number;
}