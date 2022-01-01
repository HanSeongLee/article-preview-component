import React, {useCallback, useState} from "react";
import styles from './style.module.scss';
import ShareIcon from '/public/icons/icon-share.svg';
import FacebookIcon from '/public/icons/icon-facebook.svg';
import TwitterIcon from '/public/icons/icon-twitter.svg';
import PinterestIcon from '/public/icons/icon-pinterest.svg';
import cn from 'classnames';

const ArticlePreview = ({
                            background, title, summary, avatar,
                            username, createdAt, facebook, twitter,
                            pinterest
                        }) => {

    const [openShare, setOpenShare] = useState(false);

    const onShareClick = useCallback(() => {
        setOpenShare(!openShare)
    }, [openShare]);

    return (
        <article className={styles.card}>
            <div className={styles.header}>
                <img className={styles.background}
                     src={background}
                     alt={''}
                />
            </div>
            <div className={styles.body}>
                <h3 className={styles.title}>
                    {title}
                </h3>
                <p className={styles.summary}>
                    {summary}
                </p>
            </div>
            <div className={styles.footer}>
                <img className={styles.avatar}
                     src={avatar}
                     alt={username}
                />
                <div className={styles.content}>
                    <div className={styles.username}>
                        {username}
                    </div>
                    <div className={styles.createdAt}>
                        {createdAt}
                    </div>
                </div>
                <button className={styles.shareButton}
                        onClick={onShareClick}
                        aria-label={'share'}
                        title={'share'}
                >
                    <ShareIcon/>
                </button>
                <div className={cn(styles.share, {
                    [styles.open]: openShare,
                })}>
                    <span className={styles.title}>
                        SHARE
                    </span>
                    <ul className={styles.socialLinkContainer}>
                        <li className={styles.socialLinkItem}>
                            <a href={facebook}>
                                <FacebookIcon/>
                            </a>
                        </li>
                        <li className={styles.socialLinkItem}>
                            <a href={twitter}>
                                <TwitterIcon/>
                            </a>
                        </li>
                        <li className={styles.socialLinkItem}>
                            <a href={pinterest}>
                                <PinterestIcon/>
                            </a>
                        </li>
                    </ul>
                    <button className={styles.shareButton}
                            onClick={onShareClick}
                            aria-label={'share'}
                            title={'share'}
                    >
                        <ShareIcon/>
                    </button>
                </div>
            </div>
        </article>
    );
};

export default ArticlePreview;
