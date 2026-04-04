import type { Category } from "../models/Category";
import { ArabicExpression, FrenchExpression } from "../models/Expression";
import type { Question } from "../models/Question";

export function GetCategories(): Category[] {
    // Temporary
    return ([
        { id: 0, title: "test1", description: "Catégorie garantie servie depuis l'API" },
        { id: 1, title: "test2", description: "lobortis iaculis ex velit ut ante. Praesent id justo mi. Integer libero tortor, euismod vitae rhoncus at, ornare sit amet nulla." },
        { id: 2, title: "test3", description: "Quisque consequat, dolor ut porta volutpat, ante neque fringilla lacus, vitae cursus sem tellus quis diam. Nullam vitae tincidunt leo. " },
        { id: 3, title: "test4", description: "Ut iaculis elit eu felis maximus, a imperdiet turpis facilisis. Vestibulum condimentum iaculis nunc eget lobortis. Nulla egestas gravida magna, eu cursus nisl commodo nec. " },
        { id: 4, title: "test5", description: "Quisque consequat, dolor ut porta volutpat, ante neque fringilla lacus, vitae cursus sem tellus quis diam. Nullam vitae tincidunt leo. " },
        { id: 5, title: "test6", description: "Ut iaculis elit eu felis maximus, a imperdiet turpis facilisis. Vestibulum condimentum iaculis nunc eget lobortis. Nulla egestas gravida magna, eu cursus nisl commodo nec. " },
        { id: 6, title: "test7", description: "Ut iaculis elit eu felis maximus, a imperdiet turpis facilisis. Vestibulum condimentum iaculis nunc eget lobortis. Nulla egestas gravida magna, eu cursus nisl commodo nec. " },
        { id: 7, title: "test8", description: "Quisque consequat, dolor ut porta volutpat, ante neque fringilla lacus, vitae cursus sem tellus quis diam. Nullam vitae tincidunt leo. " },
    ]);
}

export function GetQuestions(categoriesIds: number[]): Question[] {
    return [
        {
            type: "A2F",
            expression: new ArabicExpression("əs-salām-u ɛlay-kum", "السَّلَامُ عَلَيكُم"),
            correctExpression: new FrenchExpression("Bonjour"),
            otherExpressions: [
                new FrenchExpression("Comment va-tu"),
                new FrenchExpression("Au revoir"),
                new FrenchExpression("Je m'appelle")
            ]
        },
        {
            type: "A2F",
            expression: new ArabicExpression("ẖədma", "خِدمة"),
            correctExpression: new FrenchExpression("Travail"),
            otherExpressions: [
                new FrenchExpression("Manger"),
                new FrenchExpression("Aller"),
                new FrenchExpression("Travailler")
            ]
        },
        {
            type: "F2A",
            expression: new FrenchExpression("Bonjour"),
            correctExpression: new ArabicExpression("əs-salām-u ɛlay-kum", "السَّلَامُ عَلَيكُم"),
            otherExpressions: [
                new ArabicExpression("ẖədma", "خِدمة"),
                new ArabicExpression("bəslāma", "بِسْلامة"),
                new ArabicExpression("kif ḥāl-ək", "كِف حالِك")
            ]
        }
    ]
}