import { StoreRegistry } from "@sapphire/pieces";
import { RouteStore } from "./RouteStore";

export class XClient {
	private stores;
	// empty for now
	constructor() {
		this.stores = new StoreRegistry();
		this.stores.register(new RouteStore());
	}
}