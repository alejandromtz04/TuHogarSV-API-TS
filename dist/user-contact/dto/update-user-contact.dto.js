"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserContactDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_contact_dto_1 = require("./create-user-contact.dto");
class UpdateUserContactDto extends (0, mapped_types_1.PartialType)(create_user_contact_dto_1.CreateUserContactDto) {
}
exports.UpdateUserContactDto = UpdateUserContactDto;
//# sourceMappingURL=update-user-contact.dto.js.map