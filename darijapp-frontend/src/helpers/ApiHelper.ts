import type { Category } from "../models/Category";

function GetCategories(): Category[] {
    // Temporary
    return ([
        { id: 0, title: "test1", description: "Quisque sollicitudin ante a velit posuere tincidunt. Vivamus ac dolor convallis, tristique nisl eget, tempor arcu. Pellentesque aliquam nulla sed mollis commodo. Nunc gravida, lectus eu accumsan varius, libero metus lacinia nunc," },
        { id: 1, title: "test2", description: "lobortis iaculis ex velit ut ante. Praesent id justo mi. Integer libero tortor, euismod vitae rhoncus at, ornare sit amet nulla." },
        { id: 2, title: "test3", description: "Quisque consequat, dolor ut porta volutpat, ante neque fringilla lacus, vitae cursus sem tellus quis diam. Nullam vitae tincidunt leo. " },
        { id: 3, title: "test4", description: "Ut iaculis elit eu felis maximus, a imperdiet turpis facilisis. Vestibulum condimentum iaculis nunc eget lobortis. Nulla egestas gravida magna, eu cursus nisl commodo nec. " },
        { id: 4, title: "test5", description: "Quisque consequat, dolor ut porta volutpat, ante neque fringilla lacus, vitae cursus sem tellus quis diam. Nullam vitae tincidunt leo. " },
        { id: 5, title: "test6", description: "Ut iaculis elit eu felis maximus, a imperdiet turpis facilisis. Vestibulum condimentum iaculis nunc eget lobortis. Nulla egestas gravida magna, eu cursus nisl commodo nec. " },
        { id: 6, title: "test7", description: "Ut iaculis elit eu felis maximus, a imperdiet turpis facilisis. Vestibulum condimentum iaculis nunc eget lobortis. Nulla egestas gravida magna, eu cursus nisl commodo nec. " },
        { id: 7, title: "test8", description: "Quisque consequat, dolor ut porta volutpat, ante neque fringilla lacus, vitae cursus sem tellus quis diam. Nullam vitae tincidunt leo. " },
    ]);
}