import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as initSelectors from '../../core/init/init.selectors';
import Footer, { FooterProps } from './Footer.component';
import { GDLocale } from '../../../types/general';
import * as initActions from '../../core/init/init.actions';

const mapStateToProps = (state: any): Partial<FooterProps> => ({
	i18n: initSelectors.getCoreI18n(state),
	locale: initSelectors.getLocale(state)
});

const mapDispatchToProps = (dispatch: Dispatch): Partial<FooterProps> => ({
	// @ts-ignore-line
	onChangeLocale: (locale: GDLocale): any => dispatch(initActions.selectLocale(locale))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Footer);
