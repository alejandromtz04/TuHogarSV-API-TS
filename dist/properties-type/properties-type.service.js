"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesTypeService = void 0;
const common_1 = require("@nestjs/common");
let PropertiesTypeService = class PropertiesTypeService {
    create(createPropertiesTypeDto) {
        return 'This action adds a new propertiesType';
    }
    findAll() {
        return `This action returns all propertiesType`;
    }
    findOne(id) {
        return `This action returns a #${id} propertiesType`;
    }
    update(id, updatePropertiesTypeDto) {
        return `This action updates a #${id} propertiesType`;
    }
    remove(id) {
        return `This action removes a #${id} propertiesType`;
    }
};
exports.PropertiesTypeService = PropertiesTypeService;
exports.PropertiesTypeService = PropertiesTypeService = __decorate([
    (0, common_1.Injectable)()
], PropertiesTypeService);
//# sourceMappingURL=properties-type.service.js.map