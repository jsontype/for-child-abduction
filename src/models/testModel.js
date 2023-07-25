/* eslint-disable import/no-extraneous-dependencies */
import { ObjectId } from 'mongodb';
import { Schema, model, models } from 'mongoose';

const testSchema = new Schema({
  _id: ObjectId,
  title: String,
});

const Test = models.Test || model('Test', testSchema);

export default Test;
