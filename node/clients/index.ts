import { IOClients } from '@vtex/api'

import { BookClient } from './book'
import { LeadClient } from './lead'
import { MarkdownClient } from './markdown'

export class Clients extends IOClients {
  public get book() {
    return this.getOrSet('book', BookClient)
  }
  public get markdown() {
    return this.getOrSet('markdown', MarkdownClient)
  }
  public get lead() {
    return this.getOrSet('lead', LeadClient)
  }
}
