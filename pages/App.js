/*jshint esversion: 8 */
import { React, html } from "../web_modules/preact-htm/index.js";
import { Button } from "../web_modules/material-ui/index.js";
import { makeStyles } from "../web_modules/material-ui/index.js";
import { Icon } from "../web_modules/material-ui/index.js";
import { IconButton } from "../web_modules/material-ui/index.js";

const useStyles4basic = makeStyles(theme => ({
  item : {
    margin: theme.spacing(1)
  },
  container : {
    padding: theme.spacing(1)
  }
}));

const Module = props => {
    const styles_basic = useStyles4basic(props||{});
    const [defaultState, setDefaultState] = React.useState({
    });

    return html`
        <${React.Fragment}>
            <${Button} variant="outlined" color="primary" className=${styles_basic.item} key="j6lpu4x">
                Primary
            </${Button}>
            <div key="kdv1j3v">
                div
            </div>
        </${React.Fragment}>
    `;
};

export default Module;