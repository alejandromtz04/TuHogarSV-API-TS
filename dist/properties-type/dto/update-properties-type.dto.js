"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePropertiesTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_properties_type_dto_1 = require("./create-properties-type.dto");
class UpdatePropertiesTypeDto extends (0, mapped_types_1.PartialType)(create_properties_type_dto_1.CreatePropertiesTypeDto) {
}
exports.UpdatePropertiesTypeDto = UpdatePropertiesTypeDto;
//# sourceMappingURL=update-properties-type.dto.js.map