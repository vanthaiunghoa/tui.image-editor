export default ({iconStyle: {normal, active}}) => (`
    <ul class="menu">
        <li id="retate-button">
            <div class="button clockwise">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}/${normal.name}.svg#${normal.name}-ic-rotate-clockwise"
                            class="normal"/>
                        <use xlink:href="${active.path}/${active.name}.svg#${active.name}-ic-rotate-clockwise"
                            class="active"/>
                    </svg>
                </div>
                <label> 30 </label>
            </div>
            <div class="button counterclockwise">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}/${normal.name}.svg#${normal.name}-ic-rotate-counterclockwise"
                            class="normal"/>
                        <use xlink:href="${active.path}/${active.name}.svg#${active.name}-ic-rotate-counterclockwise"
                            class="active"/>
                    </svg>
                </div>
                <label> -30 </label>
            </div>
        </li>
        <li class="tui-image-editor-partition only-left-right">
            <div></div>
        </li>
        <li class="newline tui-image-editor-range-wrap">
            <label class="range">Range</label>
            <div id="rotate-range"></div>
            <input id="ratate-range-value" class="tui-image-editor-range-value" value="0" />
        </li>
    </ul>
`);
