module.exports = {
  spanish: {
    'any.unknown': '{{#label}} no está permitido',
    'any.invalid': '{{#label}} contiene un valor inválido',
    'any.failover': '{{#label}} arrojó un error al ejecutar el método de conmutación por error',
    'any.custom': '{{#label}} validación personalizada falló porque {{#error.message}}',
    'any.required': '{{#label}} es requerido',
    'any.only': '{{#label}} debe tener uno de estos valores {{#valids}}',
    'any.default': '{{#label}} arrojó un error al ejecutar el método predeterminado',
    'any.ref': '{{#label}} {{#arg}} references "{{#ref}}" which {{#reason}}',
    'alternatives.all': '{{#label}} no coincide con todos los tipos requeridos',
    'alternatives.any': '{{#label}} no coincide con ninguno de los tipos permitidos',
    'alternatives.match': '{{#label}} no coincide con ninguno de los tipos permitidosy',
    'alternatives.one': '{{#label}} coincide con más de un tipo permitido',
    'alternatives.types': '{{#label}} debe ser uno de {{#types}}',

    'array.base': '{{#label}} debe ser una lista',
    'array.excludes': '{{#label}} contiene un valor excluido',
    'array.hasKnown': '{{#label}} no contiene al menos una coincidencia requerida para el tipo "{#patternLabel}"',
    'array.hasUnknown': '{{#label}} no contiene al menos una coincidencia requerida',
    'array.includes': '{{#label}} no coincide con ninguno de los tipos permitidos',
    'array.includesRequiredBoth': '{{#label}} no contiene {{#knownMisses}} y {{#unknownMisses}} otro(s) valor(es) requerido(s)',
    'array.includesRequiredKnowns': '{{#label}} no contiene {{#knownMisses}}',
    'array.includesRequiredUnknowns': '{{#label}} no contiene {{#unknownMisses}} valor(es) requerido(s)',
    'array.length': '{{#label}} debe contener {{#limit}} items',
    'array.max': '{{#label}} debe contener como máximo {{#limit}} items',
    'array.min': '{{#label}} debe contener al menos {{#limit}} items',
    'array.orderedLength': '{{#label}} debe contener como máximo {{#limit}} items',
    'array.sort': '{{#label}} must be sorted in {#order} order by {{#by}}',
    'array.sort.mismatching': '{{#label}} no se puede ordenar debido a tipos no coincidentes',
    'array.sort.unsupported': '{{#label}} no se puede ordenar debido a un tipo no compatible {#type}',
    'array.sparse': '{{#label}} must not be a sparse array item',
    'array.unique': '{{#label}} contiene algún valor duplicado',

    'binary.base': '{{#label}} debe ser un buffer o un string',
    'binary.length': '{{#label}} debe contener {{#limit}} bytes',
    'binary.max': '{{#label}} debe contener como máximo {{#limit}} bytes',
    'binary.min': '{{#label}} debe contener al menos {{#limit}} bytes',

    'boolean.base': '{{#label}} debe ser true o false',

    'date.base': '{{#label}} debe ser una fecha válida',
    'date.format': '{{#label}} debe tener el formato: {msg("date.format." + #format) || #format}',
    'date.greater': '{{#label}} debe ser mayor que "{{#limit}}"',
    'date.less': '{{#label}} debe ser menor que "{{#limit}}"',
    'date.max': '{{#label}} debe ser menor o igual que "{{#limit}}"',
    'date.min': '{{#label}} debe ser mayor o igual que "{{#limit}}"',
    'date.format.iso': '{{#label}} debe tener un formato de fecha ISO 8601 válido',
    'date.format.javascript': 'timestamp o número en milisegundos',
    'date.format.unix': 'timestamp or número en segundos',

    'function.arity': '{{#label}} must have an arity of {{#n}}',
    'function.class': '{{#label}} debe ser una clase',
    'function.maxArity': '{{#label}} must have an arity lesser or equal to {{#n}}',
    'function.minArity': '{{#label}} must have an arity greater or equal to {{#n}}',

    'object.and': '{{#label}} contains {{#presentWithLabels}} without its required peers {{#missingWithLabels}}',
    'object.assert': '{{#label}} es válido porque {if(#subject.key, `"` + #subject.key + `" failed to ` + (#message || "pass the assertion test"), #message || "the assertion failed")}',
    'object.base': '{{#label}} debe ser del tipo {{#type}}',
    'object.instance': '{{#label}} debe ser una instancia de "{{#type}}"',
    'object.length': '{{#label}} must have {{#limit}} key{if(#limit == 1, "", "s")}',
    'object.max': '{{#label}} must have less than or equal to {{#limit}} key{if(#limit == 1, "", "s")}',
    'object.min': '{{#label}} must have at least {{#limit}} key{if(#limit == 1, "", "s")}',
    'object.missing': '{{#label}} must contain at least one of {{#peersWithLabels}}',
    'object.nand': '"{{#mainWithLabel}}" must not exist simultaneously with {{#peersWithLabels}}',
    'object.oxor': '{{#label}} contains a conflict between optional exclusive peers {{#peersWithLabels}}',
    'object.pattern.match': '{{#label}} keys failed to match pattern requirements',
    'object.refType': '{{#label}} debe ser un referencia de Joi',
    'object.regex': '{{#label}} debe ser un objeto RegExp',
    'object.rename.multiple': '{{#label}} cannot rename "{{#from}}" because multiple renames are disabled and another key was already renamed to "{{#to}}"',
    'object.rename.override': '{{#label}} cannot rename "{{#from}}" because override is disabled and target "{{#to}}" exists',
    'object.schema': '{{#label}} debe ser un esquema Joi de tipo {{#type}}',
    'object.unknown': '{{#label}} no es permitido',
    'object.with': '"{{#mainWithLabel}}" missing required peer "{{#peerWithLabel}}"',
    'object.without': '"{{#mainWithLabel}}" conflict with forbidden peer "{{#peerWithLabel}}"',
    'object.xor': '{{#label}} contains a conflict between exclusive peers {{#peersWithLabels}}',

    'number.base': '{{#label}} debe ser un número',
    'number.greater': '{{#label}} debe ser mayor que {{#limit}}',
    'number.infinity': '{{#label}} cannot be infinity',
    'number.integer': '{{#label}} debe ser un valor entero',
    'number.less': '{{#label}} debe ser menor que {{#limit}}',
    'number.max': '{{#label}}debe ser menor o igual que {{#limit}}',
    'number.min': '{{#label}} debe ser mayor o igual que {{#limit}}',
    'number.multiple': '{{#label}} debe ser múltiplo de {{#multiple}}',
    'number.negative': '{{#label}} debe ser un número negativo',
    'number.port': '{{#label}} debe ser un puerto válido',
    'number.positive': '{{#label}} debe ser un número positivo',
    'number.precision': '{{#label}} no debe tener más de {{#limit}} decimales',
    'number.unsafe': '{{#label}} must be a safe number',

    'string.alphanum': '{{#label}} debe contener solo caracteres alfanuméricos',
    'string.base': '{{#label}} debe contener caracteres',
    'string.base64': '{{#label}} must be a valid base64 string',
    'string.creditCard': '{{#label}} debe ser una tarjeta de crédito',
    'string.dataUri': '{{#label}} must be a valid dataUri string',
    'string.domain': '{{#label}} must contain a valid domain name',
    'string.email': '{{#label}} debe ser un email válido',
    'string.empty': '{{#label}} no puede estar vacío',
    'string.guid': '{{#label}} debe ser un GUID válido',
    'string.hex': '{{#label}} debe contener solo caracteres hexadecimales',
    'string.hexAlign': '{{#label}} hex decoded representation must be byte aligned',
    'string.hostname': '{{#label}} debe ser un hostname válido',
    'string.ip': '{{#label}} must be a valid ip address with a {{#cidr}} CIDR',
    'string.ipVersion': '{{#label}} must be a valid ip address of one of the following versions {{#version}} with a {{#cidr}} CIDR',
    'string.isoDate': '{{#label}} debe ser una fecha ISO 8601 válida',
    'string.isoDuration': '{{#label}} must be a valid ISO 8601 duration',
    'string.length': '{{#label}} debe contener {{#limit}} caracteres',
    'string.lowercase': '{{#label}} debe contener solo letras minúsculas',
    'string.max': '{{#label}} debe contener como máximo {{#limit}} caracteres',
    'string.min': '{{#label}} debe contener al menos {{#limit}} caracteres',
    'string.normalize': '{{#label}} must be unicode normalized in the {{#form}} form',
    'string.token': '{{#label}}debe contener solo caracteres alfanuméricos y guión bajo',
    'string.pattern.base': '{{#label}} con valor "{[.]}" no coincide para el patrón: {{#regex}}',
    'string.pattern.name': '{{#label}} con valor "{[.]}" no coincide para el patrón {{#name}}',
    'string.pattern.invert.base': '{{#label}} with value "{[.]}" matches the inverted pattern: {{#regex}}',
    'string.pattern.invert.name': '{{#label}} with value "{[.]}" matches the inverted {{#name}} pattern',
    'string.trim': '{{#label}} no debe contener espacios en blanco al inicio o final',
    'string.uri': '{{#label}} debe ser una uri válida',
    'string.uriCustomScheme': '{{#label}} must be a valid uri with a scheme matching the {{#scheme}} pattern',
    'string.uriRelativeOnly': '{{#label}} must be a valid relative uri',
    'string.uppercase': '{{#label}} debe contener solo letras mayúsculas',

    'symbol.base': '{{#label}} debe ser un símbolo',
    'symbol.map': '{{#label}} debe ser uno de {{#map}}'
  }
};
