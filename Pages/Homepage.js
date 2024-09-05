import {expect} from "@playwright/test"
import { isContext } from "node:vm"

constructor(page, context){
    this.page = page
    this.context = context
    this.searchbox
}