"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContractTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_contract_type_dto_1 = require("./create-contract-type.dto");
class UpdateContractTypeDto extends (0, mapped_types_1.PartialType)(create_contract_type_dto_1.CreateContractTypeDto) {
}
exports.UpdateContractTypeDto = UpdateContractTypeDto;
//# sourceMappingURL=update-contract-type.dto.js.map