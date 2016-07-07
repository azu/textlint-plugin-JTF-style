// LICENSE : MIT
"use strict";
import TextLintTester from "textlint-tester";
import rule from "../src/2.1.6";
var tester = new TextLintTester();
tester.run("2.1.6.カタカナの長音", rule, {
    valid: [
        "フィルターをかける", // フィルター
        "フィルタリングする" // フィルター
    ],
    invalid: [
        {
            text: "フィルタをかける",
            errors: [
                {
                    message: "フィルタをか => フィルターをか"
                }
            ]
        }
    ]
});
