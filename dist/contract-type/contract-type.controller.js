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
exports.ContractTypeController = void 0;
const common_1 = require("@nestjs/common");
const contract_type_service_1 = require("./contract-type.service");
const create_contract_type_dto_1 = require("./dto/create-contract-type.dto");
const update_contract_type_dto_1 = require("./dto/update-contract-type.dto");
let ContractTypeController = class ContractTypeController {
    constructor(contractTypeService) {
        this.contractTypeService = contractTypeService;
    }
    create(createContractTypeDto) {
        return this.contractTypeService.create(createContractTypeDto);
    }
    findAll() {
        return this.contractTypeService.findAll();
    }
    findOne(id) {
        return this.contractTypeService.findOne(+id);
    }
    update(id, updateContractTypeDto) {
        return this.contractTypeService.update(+id, updateContractTypeDto);
    }
    remove(id) {
        return this.contractTypeService.remove(+id);
    }
};
exports.ContractTypeController = ContractTypeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contract_type_dto_1.CreateContractTypeDto]),
    __metadata("design:returntype", void 0)
], ContractTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContractTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContractTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_contract_type_dto_1.UpdateContractTypeDto]),
    __metadata("design:returntype", void 0)
], ContractTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContractTypeController.prototype, "remove", null);
exports.ContractTypeController = ContractTypeController = __decorate([
    (0, common_1.Controller)('contract-type'),
    __metadata("design:paramtypes", [contract_type_service_1.ContractTypeService])
], ContractTypeController);
//# sourceMappingURL=contract-type.controller.js.map