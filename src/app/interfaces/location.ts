export interface MyLocation {
	ip:          string;
	registry:    string;
	countrycode: string;
	countryname: string;
	asn:         Asn;
	city:        string;
	spam:        boolean;
	tor:         boolean;
}

export interface Asn {
	code:  string;
	name:  string;
	route: string;
	start: string;
	end:   string;
	count: string;
}
