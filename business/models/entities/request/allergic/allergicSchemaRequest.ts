import * as superstruct from "superstruct";

export const multilingualAllergenDetailsSchema = superstruct.object({
  language: superstruct.string(),
  allergeneName: superstruct.string(),
  clientId: superstruct.string(),
});

export const allergicSchema = superstruct.object({
  clientId: superstruct.string(),
  multilingualAllergenDetails: superstruct.array(multilingualAllergenDetailsSchema),
});

export type TAllergicSchemaRequest = superstruct.Infer<typeof allergicSchema>;