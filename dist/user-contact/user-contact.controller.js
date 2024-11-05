"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContactController = void 0;
const common_1 = require("@nestjs/common");
const user_contact_service_1 = require("./user-contact.service");
const create_user_contact_dto_1 = require("./dto/create-user-contact.dto");
const update_user_contact_dto_1 = require("./dto/update-user-contact.dto");
let UserContactController = class UserContactController {
    constructor(userContactService) {
        this.userContactService = userContactService;
    }
    create(createUserContactDto) {
        return this.userContactService.create(createUserContactDto);
    }
    findAll() {
        return this.userContactService.findAll();
    }
    findOne(id) {
        return this.userContactService.findOne(+id);
    }
    update(id, updateUserContactDto) {
        return this.userContactService.update(+id, updateUserContactDto);
    }
    remove(id) {
        return this.userContactService.remove(+id);
    }
};
exports.UserContactController = UserContactController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_contact_dto_1.CreateUserContactDto]),
    __metadata("design:returntype", void 0)
], UserContactController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserContactController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserContactController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_contact_dto_1.UpdateUserContactDto]),
    __metadata("design:returntype", void 0)
], UserContactController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserContactController.prototype, "remove", null);
exports.UserContactController = UserContactController = __decorate([
    (0, common_1.Controller)('user-contact'),
    __metadata("design:paramtypes", [user_contact_service_1.UserContactService])
], UserContactController);
//# sourceMappingURL=user-contact.controller.js.map