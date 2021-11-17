import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import content from '../dictionary/general.dictionary.json'
@Injectable({
	providedIn: 'root'
})
export class ContentService {
	private cache$: BehaviorSubject<any> = new BehaviorSubject(null)
	constructor() {
		if (this.cache$.getValue() === null) {
			this.cache$.next(content)
		}
	}
	public content(): BehaviorSubject<any> {
		return this.cache$
	}
	public value(): any {
		return this.content()?.getValue()
	}
}