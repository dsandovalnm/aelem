import { SafeResourceUrl } from "@angular/platform-browser";

export interface VideoPandemia {
	id: number;
	orden: number;
	titulo: string;
	descripcion: string;
	src: any | string | SafeResourceUrl;
}