import { AliasStore } from "@sapphire/pieces";
import type { Route } from "./Route";

export class RouteStore extends AliasStore<Route> {
	public constructor() {
		super({} as any, { name: 'routes' })
	}
}