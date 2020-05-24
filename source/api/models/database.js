import { Schema, model } from 'mongoose'

export const store = model('store', new Schema({
  name: String
}))
